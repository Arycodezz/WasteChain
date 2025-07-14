'use server';

import connectToDB from "@/database";
import { charityModel } from "@/models";

export async function createCharity(
  name,
  capacity,
  location,
  organizationType, 
  accepts,
  email,
  phoneNumber
) {
  await connectToDB();
  try {
    const charity = new charityModel({
      name,
      capacity,
      location,
      organizationType,
      accepts,
      email,
      phoneNumber
    });
    await charity.save();
    const plainCharity = JSON.parse(JSON.stringify(charity));
    return {
      success: true,
      message: "Charity created successfully",
      charity: plainCharity
    };
  } catch (error) {
    console.error("Error creating charity:", error);
    return {
        success: false,
        message: "Failed to create charity"
    };
  }
}


export async function getCharities() {
  await connectToDB();
  try {
    const charities = await charityModel.find({});
    const plainCharities = JSON.parse(JSON.stringify(charities));
    return {
      success: true,
      charities: plainCharities
    };
  } catch (error) {
    console.error("Error fetching charities:", error);
    return {
      success: false,
      message: "Failed to fetch charities"
    };
  }
}

