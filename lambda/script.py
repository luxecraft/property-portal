import boto3
import json


def main():
    dyanmodb = boto3.client('dynamodb')
    count = 0
    full_data = json.load(open("data_10K_rent.json"))
    for data in full_data:
        for i in data.keys():
            data[i] = str(data[i])
        print(data)
        try:
            response = dyanmodb.put_item(
                TableName='property-portal',
                Item={
                    'id': {'S': data["id"]},
                    'project_name': {'S': data["project_name"]},
                    'builder_name': {'S': data["builder_name"]},
                    'holders_name': {'S': data["holders_name"]},
                    'postcode': {'S': data["postcode"]},
                    'address': {'S': data["address"]},
                    'street_name': {'S': data["street_name"]},
                    'city_facet': {'S': data["city_facet"]},
                    'new_facet': {'S': str(data["new_facet"])},
                    'type_facet': {'S': data["type_facet"]},
                    'amenities_extra_facet': {'S': data["amenities_extra_facet"]},
                    'amenities_facet': {'S': data["amenities_facet"]},
                    'gated_community': {'S': str(data["gated_community"])},
                    'image_url': {'S': data["image_url"]},
                    'state_facet': {'S': data["state_facet"]},
                    'bhk_facet': {'S': data["bhk_facet"]},
                    'location': {'S': data["location"]},
                    'price': {'S': data["price"]},
                    'sqrft': {'S': data["sqrft"]},
                }
            )
        except Exception as e:
            print(e)

    print(count)


if __name__ == '__main__':
    main()
