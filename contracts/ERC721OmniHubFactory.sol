// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./ERC721OmniHubContract.sol";

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

contract ERC721OmniHubFactory {
    string public contractBaseURI;

    event ContractDeployed(address deployedContractAddress);

    constructor(string memory _contractBaseURI) {
        contractBaseURI = _contractBaseURI;
    }

    function deploy(string memory _name, string memory _symbol, uint256 _fee, uint256 _supply) public returns(ERC721OmniHubContract) {
        uint256 maxSupply = (_fee == 0) ? 1000 : 100000;
        require(_supply <= maxSupply, "Not enough value for mint transaction.");

        ERC721OmniHubContract deployedContract = new ERC721OmniHubContract(_name, _symbol, _fee, _supply, contractBaseURI, msg.sender);
        emit ContractDeployed(address(deployedContract));

        return deployedContract;
    }
}