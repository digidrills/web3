//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8;

// Contract definition for Employees with relevant data members and member functions

contract StructDemo{

	struct Employee{   //Structure to store employee details
	
		int empid;
		string name;
		string department;
		string designation;
	}

	Employee []emps;  	//Array to store multiple employee objects.

	// Function to add an employee detail to the array
	function addEmployee(int empid, string memory name,string memory department,string memory designation) public{
	
		// Creation of an employee object
		Employee memory e=Employee(empid,
				name,
				department,
				designation);
		emps.push(e);
	}

	//Function to fetch an employee details, given his employee ID

	function getEmployee(int empid) public view returns(
	string memory,
	string memory,
	string memory){
		uint i;
		for(i=0;i<emps.length;i++)
		{
			Employee memory e=emps[i];
			if(e.empid==empid)  
			{
				return(e.name,
				e.department,
				e.designation);
			}
		}
		return("Not Found","Not Found","Not Found");
	}
}