
//Initialize the Async Function

async function fetchUserData() {

    //declare a constant apiUrl

    const apiUrl='https://jsonplaceholder.typicode.com/users';

    //Select the Data Container Element

    const dataContainer=document.getElementById('api-data');

    //Fetch Data Using try-catch

    try{

        //In the try block, use the await keyword with the fetch function to asynchronously get data from apiUrl. Store the response in a constant named response.

        const response=await fetch(apiUrl);
        

    }
    catch{

    }
    
}
