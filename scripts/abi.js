var abi = 
[
	{
		"constant": true,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			}
		],
		"name": "getSectionKeys",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_section_id",
				"type": "string"
			},
			{
				"name": "_title",
				"type": "string"
			},
			{
				"name": "_subtitle",
				"type": "string"
			},
			{
				"name": "_s_date",
				"type": "string"
			},
			{
				"name": "_e_date",
				"type": "string"
			},
			{
				"name": "other_info",
				"type": "string"
			}
		],
		"name": "addGenericEntry",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_phone",
				"type": "string"
			},
			{
				"name": "_email",
				"type": "string"
			},
			{
				"name": "_addr",
				"type": "string"
			},
			{
				"name": "_profile",
				"type": "string"
			}
		],
		"name": "addBasicInfo",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_section_id",
				"type": "string"
			},
			{
				"name": "_entry_id",
				"type": "uint256"
			},
			{
				"name": "owner",
				"type": "address"
			}
		],
		"name": "getGenericEntry",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "owner",
				"type": "address"
			}
		],
		"name": "getBasicInfo",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];