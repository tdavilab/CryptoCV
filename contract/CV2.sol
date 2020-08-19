pragma solidity >=0.4.16 <0.7.0;


contract CV2 {
    
    struct GenericEntry{
        string title;
        string subtitle;
        string start_date;
        string end_date;
        string other_info;
    }
    
    struct BasicInformation{
        string name;
        string phone;
        string email;
        string addr;
        string profile;
    }
    
    struct Curriculum {
        BasicInformation info;
        mapping(string => GenericEntry[]) sections;
        mapping(string => uint) entry_counter;
        string[] section_counter;
        string photo_link;
    }

    mapping(address => Curriculum) cvs;


    function addGenericEntry(string memory _section_id, string memory _title, string memory _subtitle, string memory _s_date, string memory _e_date, string memory other_info) public{
        cvs[msg.sender].sections[_section_id].push(GenericEntry(_title, _subtitle, _s_date, _e_date, other_info));
        cvs[msg.sender].section_counter.push(_section_id);
        cvs[msg.sender].entry_counter[_section_id]++;
    }
    
    function addBasicInfo(string memory _name, string memory _phone, string memory _email, string memory _addr, string memory _profile) public{
        cvs[msg.sender].info = BasicInformation(_name, _phone, _email, _addr, _profile);
    }
    
    function getGenericEntry(string memory  _section_id, uint _entry_id, address owner) public view returns (string memory, string memory, string memory, string memory, string memory) {
        GenericEntry memory r_entry = cvs[owner].sections[_section_id][_entry_id];
        return (r_entry.title, r_entry.subtitle, r_entry.start_date, r_entry.end_date, r_entry.other_info);
    }
    
    function getBasicInfo(address owner) public view returns (string memory, string memory, string memory, string memory, string memory) {
        BasicInformation memory r_info = cvs[owner].info;
        return (r_info.name, r_info.phone, r_info.email, r_info.addr, r_info.profile);
    }
    
    function getSectionKeys(address owner) public view returns (string memory) {
        
        string memory itr;
        
        for (uint i=0; i < cvs[owner].section_counter.length; i++){
            itr = string(abi.encodePacked(itr, ",", cvs[owner].section_counter[i]));
        }
        return (itr);
    }
    
}

