pragma solidity ^0.6.3;
pragma experimental ABIEncoderV2;

contract  ProductVerification{
    address public contractOwnerAddress;
    uint256 product_id_generator;


    mapping(address => mapping(uint256 => uint256[]))personal; 
    product[] product_listing;


    struct product{
        uint256 product_id;
        string product_hash ;
        string brand;
        string model;
        string weight;
        string dimension;
        string camera_pixel;
        string battery_lifetime;
        string wireless_range;
        string manufacturing_date;
        string manufacturing_location;
    }
    
    struct product_bundle{
        string product_hash;
        string brand;
        string model;
        string weight;
        string dimension;
        string camera_pixel;
        string battery_lifetime;
        string wireless_range;
        string manufacturing_date;
        string manufacturing_location;
    }

    constructor() public{
        contractOwnerAddress = msg.sender;
        initiate_ids();
    }

    function initiate_ids() public{
        product_id_generator = 0;

    }

    function createproduct(string memory _product_hash, 
                            string memory _brand,
                            string memory _model,
                            string memory _weight,
                            string memory _dimension,
                            string memory _camera_pixel,
                            string memory _battery_lifetime,
                            string memory _wireless_range,
                            string memory _manufacturing_date,
                            string memory _manufacturing_location) public {
            
            product_listing.push(product(product_id_generator++,
                                        _product_hash, 
                                        _brand,
                                        _model,
                                        _weight,
                                        _dimension,
                                        _camera_pixel,
                                        _battery_lifetime,
                                        _wireless_range,
                                        _manufacturing_date,
                                        _manufacturing_location));

            personal[msg.sender][1].push(product_id_generator);
        }




    function getProducts() public view returns(product_bundle[] memory){
        product_bundle[] memory temp = new product_bundle[](product_listing.length);
        for(uint128 i; i < product_listing.length;i++){
            temp[i] = product_bundle(product_listing[i].product_hash,
                                        product_listing[i].brand,
                                        product_listing[i].model,
                                        product_listing[i].weight,
                                        product_listing[i].dimension,
                                        product_listing[i].camera_pixel,
                                        product_listing[i].battery_lifetime,
                                        product_listing[i].wireless_range,
                                        product_listing[i].manufacturing_date,
                                        product_listing[i].manufacturing_location
                                        );
        }
        return temp;
    }

    function myProducts(address _owner)public view returns(product[] memory){
        product[] memory temp1 = new product[](personal[_owner][1].length);
        for(uint128 i=0; i < personal[_owner][1].length ; i++){
            temp1[i] = product_listing[personal[_owner][1][i]-1];
        }
        return temp1;
    }

    function getProductHash(uint256 _product_id) public view returns(string memory){
        for(uint128 i; i < product_listing.length ;i++){
            if(product_listing[i].product_id == _product_id){
                return product_listing[i].product_hash;
            }
        }
        //return address(0);
    }


 }
 