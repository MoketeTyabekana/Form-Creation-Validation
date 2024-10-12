
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

        //convert the response to JSON using await response.json() and store this data in a constant named users.

        const users=await response.json();

        //Clear the Loading Message

        dataContainer.innerHTML='';

        //Create and Append User List

        const userList=document.createElement('ul');

        //Loop through the users array with forEach, and for each user, do the following:

        users.array.forEach(user => {
            
            const listItem=document.createComment('li');
            listItem.textContent=user.name;
            
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList);

    }
    catch{
        dataContainer.innerHTML='';
        

    }
    
}
