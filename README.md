# MoSSaiC Visualisations

This project brings together pluggable visualisations for MoSSaiC applications.

Visualisations are bundled in a CouchApp which contains all the required
dependencies in /vendor.

## Getting started

Publish the CouchApp to a CouchDB instance using a CouchApp tool such as Situp [1] or CouchApp [2].

For example using Situp:

    situp.py addserver -n my_server -s SERVER_URL
    situp.py -d vis push -s my_server -d DATABASE_NAME

[1] https://github.com/drsm79/situp
[2] https://github.com/couchapp/couchapp

## Uploading data

An example dataset is provided in `data/stochastic`. These .json files can be pushed to
a CouchDB instance using curl as follows:

    for file in *.json;do curl -X POST SERVER_URL/DATABASE_NAME -d @$file -H 'Content-type: Application/json';done