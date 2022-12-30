import { expect } from "chai";
import { ethers } from "hardhat";
import { Signer, BigNumber } from "ethers";

describe("SuperToken", function () {
  it("Should return the new greeting once it's changed", async function () {
    const SuperToken = await ethers.getContractFactory("SuperToken");
    const sup = await SuperToken.deploy();
    await sup.deployed();

    let one: Signer, two: Signer, three: Signer, four: Signer, five: Signer;
    let oneAddr: string, twoAddr: string, threeAddr: string, fourAddr: string, fiveAddr: string;
    [one, two, three] = await ethers.getSigners();
    [oneAddr, twoAddr, threeAddr] = await Promise.all([one, two, three].map((s) => s.getAddress()));

    console.log(await sup.mint(oneAddr, "one"));
    console.log(await sup.mint(twoAddr, "two"));
    console.log(await sup.ownerOf(0));
    console.log(await sup.ownerOf(1));
    console.log(oneAddr);

  });
});
