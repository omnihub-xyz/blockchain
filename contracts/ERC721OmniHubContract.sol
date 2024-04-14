// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

/** ---------------------------------------------------------------------------- *
*                                                                                *
*                          :================================:                    *
*                        :====================================:                  *
*                      :========================================:                *
*                    :============================================               *
*                  :=======--==========-..............-===========               *
*                :=========: .-==========:            :===========               *
*               ===========:   .-==========:          :===========               *
*               ===========:     .-==========:        :===========               *
*               ===========:       .-==========:      :===========               *
*               ===========:         .-==========:    :===========               *
*               ===========:           .-==========:  :===========               *
*               ===========:             .-==========::=========:                *
*               ===========-...............-==================:                  *
*               ============================================:                    *
*                :========================================:                      *
*                  :====================================:                        *
*                    :================================:                          *
*                                                                                *
*                        Smart contract created by OMNIHUB                       *
*         Generate your NFT Collection with https://launchpad.omnihub.xyz        *
*                           No coding skills required                            *
*                                                                                *
** ----------------------------------------------------------------------------- */

contract ERC721OmniHubContract is ERC721A, Ownable {
    using Strings for uint256;

    uint256 public fee;
    uint256 public supply;
    string public baseURI;
    address private commissionRecipient = 0xeD59D863310d387455B5077de2D08055d7E39C61;

    constructor(string memory _name, string memory _symbol, uint256 _fee, uint256 _supply, string memory _newBaseURI, address _initialOwner) ERC721A(_name, _symbol) Ownable(_initialOwner) {
        fee = _fee;
        supply = _supply;
        baseURI = _newBaseURI;
    }

    function _startTokenId() internal view virtual override returns (uint256) {
        return 1;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return string.concat(baseURI, Strings.toHexString(uint256(uint160(address(this))), 20), '/');
    }

    function mint(uint256 quantity) external payable {
        require(totalSupply() + quantity <= supply, "The requested mint quantity exceeds the supply.");
        require(fee * quantity <= msg.value, "Not enough value for mint transaction.");

        _mint(msg.sender, quantity);
    }

    function airdrop(address[] memory _addresses) external onlyOwner {
        require(totalSupply() + _addresses.length <= supply, "The requested mint quantity exceeds the supply.");

        for (uint256 i = 0; i < _addresses.length; i++) {
            _mint(_addresses[i], 1);
        }
    }

    function mintTo(address _receiver, uint256 _quantity) external onlyOwner {
        require(totalSupply() + _quantity <= supply, "The requested mint quantity exceeds the supply.");
        _mint(_receiver, _quantity);
    }

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "Insufficient balance.");

        uint256 commission = balance * 5 / 100;
        uint256 remainingBalance = balance - commission;

        payable(commissionRecipient).transfer(commission);
        payable(owner()).transfer(remainingBalance);
    }
}