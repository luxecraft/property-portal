from faker import Faker
import random
import json

Faker.seed(0)
fake = Faker('en_IN')
fake_name = Faker()

dataField = {
    "project_name": "Akkala heights",
    "builder_name": "SGC",
    "city_facet": "Chennai",
    "state_facet": "Tamil Nadu",
    "phone": "00487647593",
    "postcode": "421948",
    "address": "H.No. 157\nBedi Circle\nRaebareli-938778",
    "street_name": "Balasubramanian Road",
    "id": "0",
    "type_facet": "Residential Apartment",
    "new_facet": False,
    "price": 25000,
    "bhk_facet": 5,
    "location": [
      26.669587,
      84.957397
    ],
    "gated_community": False,
    "amenities_extra": ["swimming", "power_backup", "lifts", "security", "parking space", "gym and spa", "library"],
    "amenities": ["furnished", "On-site maintanance", "Balcony", "Modular Kitchen", "pvc windows"],
    "sqrft": 1800,
}

house_types = [ "Residential Apartment",
 "Independent House/Villa",
 "Residential Land",
 "Studio Apartment",
 "Farm House",
 "Other"
]
amenities_extra = ["swimming", "lifts", "security", "gym and spa", "library", "cctv", "children play area", "clubhouse"]
amenities = ["furnished", "on-site maintanance", "balcony", "modular Kitchen", "parking space", "power backup"]
names = ["Heights", "Elan", "Residency", "Highlands", "Dwelling", "Centeralia", "Avenue", "Expanza", "Crystal Garden", "County", "Land Mark", "Towers"]
builder = ["Constructions", "Builders", "Builders & Promoters", "Group", "Value Homes", "Properties"]

bhk = [1, 2, 3, 4, 5, 6, 7]
distrubution = [0.2, 0.3, 0.25, 0.1, 0.05, 0.05, 0.05]

def main():
    data = []
    latlong = json.load(open('latlong.json','r'))
    citystate = json.load(open('citystate.json','r'))
    id = 0
    for _ in range(100000):
        document = {
            "id": str(id),
            "project_name": fake_name.first_name() + " " + names[random.randint(0, 11)],
            "builder_name": fake.last_name() + " " + builder[random.randint(0, 5)],
            "holders_name": fake.name(),
            "phone": fake.phone_number(),
            "postcode": fake.postcode(),
            "address": fake.address(),
            "street_name": fake.street_name(),
            "city_facet": fake.city_name(),
            "new_facet": bool(random.getrandbits(1)),
            "type_facet": house_types[random.randint(0, 5)],
            "amenities_extra_facet": random.choices(amenities_extra, k=random.randint(0, len(amenities_extra) - 1)),
            "amenities_facet": random.choices(amenities, k=random.randint(0, len(amenities) - 1)),
            "gated_community": bool(random.getrandbits(1)),
            "image_url": f"https://propertyportal.s3.ap-south-1.amazonaws.com/images/{random.randint(1, 25)}.jpg"
        }
        try:
            document["state_facet"] = citystate[document["city_facet"]]
        except KeyError:
            document["state_facet"] = fake.state()
        
        document["bhk_facet"] = random.choices(bhk, distrubution, k=1)[0]
        document["location"] = [round(random.uniform(-0.000099, 0.000099) + latlong[document["city_facet"]][0], 6),  round(random.uniform(-0.000099, 0.000099) + latlong[document["city_facet"]][1], 6)]

        if (document["city_facet"] in ["Chennai", "New Delhi", "Mumbai", "Bangalore", "Hyderbad"]):
            document["price"] = random.randint(100, 400) * 100
        else:
            document["price"] = random.randint(50, 200) * 100
        
        if(document["bhk_facet"] in [1, 2, 3]):
            document["sqrft"] = random.randint(50, 300) * 10
        else:
            document["sqrft"] = random.randint(400, 1000) * 10
        
        id += 1

        
        data.append(document)
    json.dump(data, open("data.json", 'w'), indent=2)
    
if __name__ == '__main__':
    main()