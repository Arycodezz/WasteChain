'use server'

import connectToDB from "@/database";
import { partnerModel } from "@/models";

export async function createPartner(
    name,
    itemName,
    quantity,
    category,
    location,
    price,
    description,
    email,
    phoneNumber
    ) 
{
    await connectToDB();
    try{
        const partner = new partnerModel({
            name,
            itemName,
            quantity,
            category,
            location,
            price,
            description,
            email,
            phoneNumber
        });
        await partner.save();
        const plainPartner = JSON.parse(JSON.stringify(partner));
        return {
            success: true,
            message: "Partner created successfully",
            partner: plainPartner
        };
    } catch (error) {
        console.error("Error creating partner:", error);
        return {
            success: false,
            message: "Error creating partner"
        };
    }
}

export async function getPartners() {
    await connectToDB();
    try {
        const partners = await partnerModel.find({});
        const plainPartners = JSON.parse(JSON.stringify(partners));
        return {
            success: true,
            partners: plainPartners
        };
    } catch (error) {
        console.error("Error fetching partners:", error);
        return {
            success: false,
            message: "Failed to fetch partners"
        };
    }
}