import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//This service contain all the data of the alumnis. We are printing the details of all the alumnis by a static call to this service

export class AlumniDataService {
  members=[
    {
     "id": 1,
     "name": "Abhirami Devi H G ",
     "yop": "2021",
     "department": "CSE1",
     "company": "EY, TRIVANDRUM",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 2,
     "name": "Fousia N",
     "yop": "2021",
     "department": "CSE1",
     "company": "EY ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 3,
     "name": "Jaya Dharshana S S",
     "yop": "2021",
     "department": "CSE1",
     "company": "Smiths Detection, Bangalore ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 4,
     "name": "Alfiya S",
     "yop": "2021",
     "department": "CSE1",
     "company": "6D Technologies, Bangalore, India ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 5,
     "name": "Anargha John ",
     "yop": "2021",
     "department": "CSE1",
     "company": "PromptTech solutions, Technopark, TVM",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 6,
     "name": "Ahaliya.S ",
     "yop": "2021",
     "department": "CSE1",
     "company": "Accubits Technologies Pvt Ltd Trivandrum ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 7,
     "name": "Hridhya P S",
     "yop": "2021",
     "department": "CSE1",
     "company": "Infosys Trivandrum ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 8,
     "name": "Ashna S Chirayil",
     "yop": "2021",
     "department": "CSE1",
     "company": "Accenture bangalore",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 9,
     "name": "Devika Raj B",
     "yop": "2021",
     "department": "CSE1",
     "company": "Accenture, Bangalore ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 10,
     "name": "Harene J",
     "yop": "2022",
     "department": "CSE1",
     "company": "Wipro ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 11,
     "name": "Devika Dinesh ",
     "yop": "2021",
     "department": "CSE1",
     "company": "Infosys Thiruvananthapuram ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 12,
     "name": "Deepika Dinesh ",
     "yop": "2021",
     "department": "CSE1",
     "company": "Kimball Electronics",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 13,
     "name": "Arya Lakshmi T ",
     "yop": "2022",
     "department": "CSE1",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 14,
     "name": "K M Anjana",
     "yop": "2022",
     "department": "CSE1",
     "company": "H & R BLOCK (INDIA) PRIVATE LIMITED, Module No. 211 N & 211 S, 11th Floor,   Yamuna Building, SEZ Unit, Technopark Phase III, Kulathoor PO, Trivandrum – 695583",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 15,
     "name": "Ahalya S T ",
     "yop": "2022",
     "department": "ECE",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 16,
     "name": "Bahiya A",
     "yop": "2021",
     "department": "CSE1",
     "company": "Capgemini, Chennai",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 17,
     "name": "Fathima N S ",
     "yop": "2022",
     "department": "ECE",
     "company": "Tata Elxsi Trivandrum ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 18,
     "name": "Ariya Das",
     "yop": "2022",
     "department": "CSE1",
     "company": "INTERN BROTOTYPE ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 19,
     "name": "Anjana Manoj ",
     "yop": "2022",
     "department": "CSE1",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 20,
     "name": "Gowri V S",
     "yop": "2021",
     "department": "CSE1",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 21,
     "name": "Daya Sara",
     "yop": "2021",
     "department": "CSE1",
     "company": "Target Corporation, Bangalore",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 22,
     "name": "Athira MS",
     "yop": "2022",
     "department": "CSE1",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 23,
     "name": "Arya JG",
     "yop": "2022",
     "department": "CSE1",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 24,
     "name": "Athira S Nair",
     "yop": "2022",
     "department": "CSE1",
     "company": "EY, Trivandrum ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 25,
     "name": "RADHIKA D S",
     "yop": "2022",
     "department": "ECE",
     "company": "Cognizant, Kochi ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 26,
     "name": "Sufana Ashraf j",
     "yop": "2019",
     "department": "AEI",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 27,
     "name": "Akhila R J",
     "yop": "2022",
     "department": "CSE1",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 28,
     "name": "Abinandhini A ",
     "yop": "2022",
     "department": "CSE1",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 29,
     "name": "Julie James",
     "yop": "2021",
     "department": "CSE1",
     "company": "Accenture, Bangalore",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 30,
     "name": "Aiswarya U R ",
     "yop": "2021",
     "department": "CSE1",
     "company": "UST  Global, Trivandrum",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 31,
     "name": "P Gayathri Rajesh",
     "yop": "2021",
     "department": "CSE1",
     "company": "Accenture Bangalore ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 32,
     "name": "Akshaya S R",
     "yop": "2021",
     "department": "CSE1",
     "company": "TCS",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 33,
     "name": "Gouri Sathish",
     "yop": "2021",
     "department": "CSE1",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 34,
     "name": "Sreedevi P S",
     "yop": "2019",
     "department": "ECE",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 35,
     "name": "Saradha Hariharan ",
     "department": "IT",
     "company": "Accenture Solutions Pvt ltd",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 36,
     "name": "Arya Mohan ",
     "yop": "2021",
     "department": "CSE1",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 37,
     "name": "Gayathri S Unnithan",
     "yop": "2021",
     "department": "CSE1",
     "company": "EY GDS - Trivandrum ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 38,
     "name": "Anupama D U",
     "yop": "2021",
     "department": "CSE1",
     "company": "Torryharris  Bangalore ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 39,
     "name": "Nanda S Hari",
     "yop": "2022",
     "department": "ECE",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 40,
     "name": "Najia Nisarudeen ",
     "yop": "2022",
     "department": "ECE",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 41,
     "name": "Reshma B",
     "yop": "2021",
     "department": "ECE",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 42,
     "name": "Suha n",
     "yop": "2022",
     "department": "AEI",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 43,
     "name": "Devika Nair G S",
     "department": "AEI",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 44,
     "name": "Sona TP",
     "yop": "2022",
     "department": "ECE",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 45,
     "name": "Bhavana SyamPrasad ",
     "yop": "2021",
     "department": "AEI",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 46,
     "name": "Khajal A ",
     "yop": "2022",
     "department": "CSE2",
     "company": "IBS Software ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 47,
     "name": "Sosa Thomas",
     "yop": "2022",
     "department": "CSE2",
     "company": "IBM, Kochi. ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 48,
     "name": "KrishnaPriya P",
     "yop": "2022",
     "department": "CSE2",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 49,
     "name": "Malavika Nair ",
     "yop": "2022",
     "department": "CSE2",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 50,
     "name": "Deena A Jawad ",
     "yop": "2021",
     "department": "CSE1",
     "company": "Accenture, Bengaluru",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 51,
     "name": "B S Aishwarya Valli",
     "yop": "2020",
     "department": "ECE",
     "company": "Capgemini, Bangalore",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 52,
     "name": "Anjali. M",
     "yop": "2021",
     "department": "CSE1",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 53,
     "name": "Jasmine George ",
     "yop": "2022",
     "department": "CSE2",
     "company": "Allianz",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 54,
     "name": "Kiruthika Devi P ",
     "yop": "2020",
     "department": "CSE2",
     "company": "HDFC Bank , Coimbatore ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 55,
     "name": "Kiruthika Devi P ",
     "yop": "2020",
     "department": "CSE2",
     "company": "HDFC Bank, Coimbatore ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 56,
     "name": "Nandana J",
     "yop": "2021",
     "department": "CSE2",
     "company": "Accenture, Bangalore",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 57,
     "name": "Farhana Abdul Kader",
     "yop": "2021",
     "department": "IT",
     "company": "UST & Trivandrum",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 58,
     "name": "Aarya S Nair ",
     "yop": "2021",
     "department": "CE",
     "company": "L&T Construction ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 59,
     "name": "Madhurima R",
     "yop": "2021",
     "department": "CE",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 60,
     "name": "Pooja Suresh",
     "yop": "2021",
     "department": "CSE2",
     "company": "Accenture, Bangalore ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 61,
     "name": "S A Krishnendu ",
     "yop": "2021",
     "department": "CE",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 62,
     "name": "Swathy Krishna K S ",
     "yop": "2020",
     "department": "CE",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 63,
     "name": "Angelyn Beena Shaw ",
     "yop": "2021",
     "department": "CSE1",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 64,
     "name": "Athira S Nair ",
     "yop": "2021",
     "department": "CSE1",
     "company": "Ey",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 65,
     "name": "Aiswarya A S",
     "yop": "2021",
     "department": "CSE1",
     "company": "Accenture, Bangalore",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 66,
     "name": "Fahmida P",
     "yop": "2021",
     "department": "CSE1",
     "company": "Accenture, Coimbatore ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 67,
     "name": "Fathima Zilla",
     "yop": "2021",
     "department": "CSE1",
     "company": "Accenture ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 68,
     "name": "Amble Antony",
     "department": "AEI",
     "company": "Bank of Queensland",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 69,
     "name": "Gayathri Sibi ",
     "yop": "2021",
     "department": "CSE1",
     "company": "Accenture, Bangalore ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 70,
     "name": "GOURISREE M",
     "yop": "2021",
     "department": "CSE1",
     "company": "Accenture Bangalore ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 71,
     "name": "Neeraja Mohan P ",
     "yop": "2021",
     "department": "CSE2",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 72,
     "name": "Aiswarya C J",
     "yop": "2022",
     "department": "CSE1",
     "company": "Tata Consultancy Services (TCS) , Trivandrum",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 73,
     "name": "Aswini AS",
     "yop": "2020",
     "department": "CE",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 74,
     "name": "Mithra K R",
     "yop": "2020",
     "department": "ECE",
     "company": "Quest Global",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 75,
     "name": "Athira M S",
     "yop": "2020",
     "department": "ECE",
     "company": "Accenture, Bengaluru",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 76,
     "name": "Shivanya ",
     "yop": "2022",
     "department": "CSE2",
     "company": "Target",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 77,
     "name": "Vismaya Baiju",
     "yop": "2021",
     "department": "CSE2",
     "company": "Quest Global Technopark Kazhakkuttam TVM",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 78,
     "name": "Ariya Carmel ",
     "yop": "2020",
     "department": "ECE",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 79,
     "name": "Gayathri Jayan",
     "department": "CSE1",
     "company": "Campus placement in 2006 fir Infosys (Current - University of New South Wales, Sydney, Australia)",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 80,
     "name": "Sibi S",
     "department": "CSE1",
     "company": "CDAC Trivandrum ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 81,
     "name": "Sreelekshmi Remesh",
     "yop": "2020",
     "department": "IT",
     "company": "Accenture, Bangalore ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 82,
     "name": "Swathy A S",
     "yop": "2022",
     "department": "ECE",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 83,
     "name": "Indu Shalini P S",
     "department": "AEI",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 84,
     "name": "Athira S Kumar",
     "yop": "2020",
     "department": "IT",
     "company": "Floret Technologies",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 85,
     "name": "R S Sravya ",
     "yop": "2020",
     "department": "ECE",
     "company": "Tata Elxsi",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 86,
     "name": "Shilpa V M",
     "yop": "2021",
     "department": "CSE2",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 87,
     "name": "Anjana B Nair",
     "yop": "2021",
     "department": "CSE1",
     "company": "TCS Kochi",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 88,
     "name": "Chinchu ",
     "department": "AEI",
     "company": "Milestone inc Bangalore ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 89,
     "name": "Ronia ",
     "department": "CSE1",
     "company": "Not working currently ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 90,
     "name": "Jaseena R",
     "yop": "2019",
     "department": "ECE",
     "company": "Tvm",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 91,
     "name": "Poornima Jayaprakash ",
     "yop": "2021",
     "department": "CSE2",
     "company": "Accenture Bengaluru ",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 92,
     "name": "Gowri Krishna S ",
     "yop": "2020",
     "department": "ECE",
     "admin": 0,
     "Column8": ""
    },
    {
     "id": 93,
     "name": "Aparna Maya Manoj Kumar",
     "yop": "2019",
     "department": "CSE1",
     "admin": 0,
     "Column8": ""
    }
   ]

  constructor() { }


}
