class Location {
    constructor(city, zip, state = null) {
        this.zip = zip;
        this.city = city;
        this.state = null;
    }
}

class Resource {
    constructor() {
        this.name = null;
        //a name
        //phone 
        //government vs nonprofit
        //demographic info supports
        //this.location new Location()
    }
}

class Topic {
    constructor() {
        //topic name
        //resources [Resource]
        //demographic 
    }
}

class DemographicInfo {

}

class Client {
    constructor(topics, demoinfo, location) {
        this.demoinfo = new DemographicInfo();
        this.topics = new Topic();
        this.location = new Location();
    }

    //     getresources(){
    //         /* make a function to be able to retrieve resources
    //         based on client interests and location */ 
    //      for( every topic we're interested in )
    //       if(this.location === topic[i].resource.location ) {
    //         listOfResources.push(topic[i].resource); 
    //       }

    //       return listofresource 
    //     }
    //   }

    //   topic(homelessness)
    //     The Awesome Shelter = 66101
    //     The lgbt support Center = 66101 

    //   I am here = 66101 

    //   //UI function 
    //   function displayResrouces(){ 
    //     innerhtml = resourcesForLocationAndTopic() 
    //   }

    //   let activeClient = new Client(); 
}