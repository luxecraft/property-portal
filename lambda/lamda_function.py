import typesense
import json


def lambda_handler(event, context):
    client = typesense.Client({
        'nodes': [{
            'host': 'server.harisaran.live',
            'port': '443',
            'protocol': 'https',
        }],
        'api_key': 'xyz',
        'connection_timeout_seconds': 2
    })

    processed = 0
    for record in event['Records']:
        ddb_record = record['dynamodb']
        if record['eventName'] == 'REMOVE':
            res = client.collections['rent'].documents[str(
                ddb_record['OldImage']['id']['S'])].delete()
        else:
            document = ddb_record['rent']
            document["amenities_facet"] = json.load(
                document["amenities_facet"])
            document["amenities_extra_facet"] = json.load(
                document["amenities_extra_facet"])
            document["location"] = json.load(document["location"])
            res = client.collections['rent'].upsert(document)
            print(res)
        processed = processed + 1
        print('Successfully processed {} records'.format(processed))
    return processed
