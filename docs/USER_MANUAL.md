# User Manual

###Endpoints:
- /nearest-vaccines: 
	- Lat:  Latitude.
	- Long: Longitude
	- N: Number of results to return. Default max is 10, if over limit, an invalid parameter error is returned.

###Example usage (curl)
- curl "http://localhost:3000/nearest-vaccines?lat=40.7128&long=-74.0060&n=2"
```json
[
  {
    "provider_location_guid": "97619288-4ae3-4cac-817e-4175b2cd2c01",
    "loc_store_no": "10168",
    "loc_phone": "(301) 220-3860",
    "loc_name": "CVS Pharmacy, Inc. #10168",
    "loc_admin_street1": "8319 BALTIMORE AVE.",
    "loc_admin_street2": "",
    "loc_admin_city": "COLLEGE PARK",
    "loc_admin_state": "MD",
    "loc_admin_zip": "20740",
    "sunday_hours": "11:00 AM - 5:00 PM",
    "monday_hours": "9:00 AM - 7:00 PM",
    "tuesday_hours": "9:00 AM - 7:00 PM",
    "wednesday_hours": "9:00 AM - 7:00 PM",
    "thursday_hours": "9:00 AM - 7:00 PM",
    "friday_hours": "9:00 AM - 7:00 PM",
    "saturday_hours": "10:00 AM - 6:00 PM",
    "web_address": "https://www.cvs.com/store-locator/details-directions/010168",
    "pre_screen": "https://www.cvs.com/immunizations/covid-19-vaccine",
    "insurance_accepted": "true",
    "walkins_accepted": "true",
    "provider_notes": "It is highly recommended to make an appointment for pediatric (5-11 years old) COVID-19 vaccinations.",
    "ndc": "59267-4315-01",
    "med_name": "Pfizer-BioNTech, COVID-19 Vaccine, 3mcg/0.3 mL, 3 dose",
    "in_stock": "false",
    "supply_level": "0",
    "quantity_last_updated": "2023-09-17",
    "latitude": "38.992656",
    "longitude": "-76.932527",
    "Category": "covid",
    "Unnamed Column": "",
    "offers_free_masks": "false",
    "min_age_months": "0",
    "min_age_years": "3",
    "bridge_access_program": "TRUE",
    "distance": 577
  },
  {
    "provider_location_guid": "97619288-4ae3-4cac-817e-4175b2cd2c01",
    "loc_store_no": "10168",
    "loc_phone": "(301) 220-3860",
    "loc_name": "CVS Pharmacy, Inc. #10168",
    "loc_admin_street1": "8319 BALTIMORE AVE.",
    "loc_admin_street2": "",
    "loc_admin_city": "COLLEGE PARK",
    "loc_admin_state": "MD",
    "loc_admin_zip": "20740",
    "sunday_hours": "11:00 AM - 5:00 PM",
    "monday_hours": "9:00 AM - 7:00 PM",
    "tuesday_hours": "9:00 AM - 7:00 PM",
    "wednesday_hours": "9:00 AM - 7:00 PM",
    "thursday_hours": "9:00 AM - 7:00 PM",
    "friday_hours": "9:00 AM - 7:00 PM",
    "saturday_hours": "10:00 AM - 6:00 PM",
    "web_address": "https://www.cvs.com/store-locator/details-directions/010168",
    "pre_screen": "https://www.cvs.com/immunizations/covid-19-vaccine",
    "insurance_accepted": "true",
    "walkins_accepted": "true",
    "provider_notes": "It is highly recommended to make an appointment for pediatric (5-11 years old) COVID-19 vaccinations.",
    "ndc": "80777-0102-04",
    "med_name": "Moderna, SPIKEVAX, 50mcg/0.5 mL, single dose",
    "in_stock": "false",
    "supply_level": "0",
    "quantity_last_updated": "2023-09-23",
    "latitude": "38.992656",
    "longitude": "-76.932527",
    "Category": "covid",
    "Unnamed Column": "",
    "offers_free_masks": "false",
    "min_age_months": "0",
    "min_age_years": "3",
    "bridge_access_program": "TRUE",
    "distance": 577
  }
]
```
- curl "http://localhost:3000/nearest-treatments?lat=40.7128&long=-74.0060&n=1"
```json
[
  {
    "provider_name": "CVS STORE #01444",
    "address1": "7300 Baltimore Blvd",
    "address2": "CVS Pharmacy",
    "city": "College Park",
    "country": "Prince Georges",
    "state_code": "MD",
    "zip": "20740",
    "national_drug_code": "00069-1085-30",
    "order_label": "Paxlovid",
    "courses_avail": "34",
    "longitude": "-76.93837",
    "latitude": "38.97998",
    "NPI": "1912004490",
    "last_report_date": "12/11/2023 12:00:00 AM",
    "provider_status": "ACTIVE",
    "provider_note": "",
    "": "",
    "distance": 1183
  }
]
```
