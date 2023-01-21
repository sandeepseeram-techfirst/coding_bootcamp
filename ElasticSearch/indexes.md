Example: 

PUT houses/_doc/1
{
 "door_number":"123A",
 "house_type":"Semi detached",
 "bedrooms":5,
 "market_price_gbp":375000
}

Creating a Index:

PUT houses
{
  "mappings": {
    "properties": {
      "door_number":{
        "type": "keyword"
      },
      "house_type":{
        "type":"text"
      },
      "bedrooms":{
        "type": "byte"
      }, 
      "market_price_gbp":{
        "type": "double"
      }
    }
  },
  "settings": {
    "number_of_shards": 3,
    "number_of_replicas": 2
  },
  "aliases":{
    "new_houses":{}
  }
}