# CryptoCV: Prototype of a DApp that stores CV entries in a blockchain smart contract 

Application that allows you to generate your CV and store it on a Blockchain.
It connects with a smart contract that dynamically stores CV information on a Blockchain.
The frontend uses jQuery and the library web3 to call the methods of the smart contract to store or get information.

The smart contract was deployed on a private blockchain using Ganache, which was stored on a AWS EC2 instance.
Metamask was used to access the wallets generated by ganache, and to connect the website to the Blockchain.
The web server was available at the same EC2 instance running on apache.

## Installation

### AWS EC2 Instance Configuration

In the creation of the AWS EC2 instance, you have to run this script.

```sh
#!/bin/bash
# Script - CV
sudo su
# Updates the instance
yum update –y
sudo yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_12.x | sudo -E bash –
# Install nodejs
sudo yum install -y nodejs
# Install truffle
sudo npm install -g truffle
# Install ganache
sudo npm install -g ganache-cli
# Install Apache HTTP Server
sudo yum install httpd –y
# Starts Apache HTTP Server in the port 8080
service httpd start
chkconfig httpd on
```

In the AWS EC2 configuration, the ports HTTP 80, HTTPS 443, Custom TCP 8545 and Custom TCP 3000 must be open.

### Setup the apache web server 

In the console of the AWS EC2 instance, you have to execute the following commands

```sh
cd /var/www/
git clone https://github.com/tdavilab/blockchain-cv.git .
```

### Start the Ganache instance

In the console of the AWS EC2 instance, you have to execute the following command.
This command will start the ganache blockchain. This instance has to be always running, listening for requests.

```sh
ganache-cli -h 0.0.0.0
```

### Metamask configuration

- You need metamask to be installed in your browser. This was tested with Metamask Google Chrome Extension.
- Inside metamask, you have to insert the wallet seed phrase generated by ganache, and then connect to the ganache instance address, which is served at the port 8545 of your AWS EC2 instance.

### Contract deployment

- The contract can be deployed using remix with an active metamask connection.
- The contract is located at the folder contract/CV2.sol


## Usage

To use the application, connect to the port 80 of your running AWS instance.

- index.html allows you to insert generic information to your CV.
- output.html allows you to see the complete CV stored on a specific blockchain address.

## Project Overview

![b1](https://user-images.githubusercontent.com/25911836/154666006-7603e53d-1e6a-4515-afa4-af4726c63ec0.png)

## Project Overview

### Interfaces (Add basic information and Add Generic Entry)

![b2](https://user-images.githubusercontent.com/25911836/154666539-90151b92-3a4a-4c81-aa86-f4e170bca093.png)
![b3](https://user-images.githubusercontent.com/25911836/154666556-b71c876d-cb22-4d3e-8ae5-cb0322a808f7.png)

### Get CV
![b4](https://user-images.githubusercontent.com/25911836/154666395-aedd8dd7-d825-48dc-9968-4d9bd3676e2d.png)

