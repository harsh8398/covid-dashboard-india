import json


if __name__ == "__main__":
    new_records = []
    with open("./raw-data/covid_stats_latest.json") as f:
        data = json.load(f)
        for record in data:
            new_records.append({"cases":record["active"],"deaths":record["death"],"date":"01/04/2022","state":record["state_name"],"sno":record["sno"]})
    
    with open("processed.json", "w") as f:
        f.write(json.dumps(new_records))