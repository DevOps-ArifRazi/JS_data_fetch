// const posts = [
//     {
//         name :"Md Arif-Uz-Zaman Razi",
//         id:"ID:021 131 002",
//         department:"Department:EEE",
//         bloodgroup: "Bloodgroup:A+"
        
//     },
//     {
//         name :"Md Arif-Uz-Zaman Razi",
//         id:"ID:021 131 002",
//         department:"Department:EEE",
//         bloodgroup: "Bloodgroup:A+"
        
//     },
//     {
//         name :"Md Arif-Uz-Zaman Razi",
//         id:"ID:021 131 002",
//         department:"Department:EEE",
//         bloodgroup: "Bloodgroup:A+"
        
//     },
//     {
//         name :"Md Arif-Uz-Zaman Razi",
//         id:"ID:021 131 002",
//         department:"Department:EEE",
//         bloodgroup: "Bloodgroup:A+"
        
//     },
//     {
//         name :"Md Arif-Uz-Zaman Razi",
//         id:"ID:021 131 002",
//         department:"Department:EEE",
//         bloodgroup: "Bloodgroup:A+"
        
//     },
//     {
//         name :"Md Arif-Uz-Zaman Razi",
//         id:"ID:021 131 002",
//         department:"Department:EEE",
//         bloodgroup: "Bloodgroup:A+"
        
//     },
//     {
//         name :"Md Arif-Uz-Zaman Razi",
//         id:"ID:021 131 002",
//         department:"Department:EEE",
//         bloodgroup: "Bloodgroup:A+"
        
//     },
//     {
//         name :"Md Arif-Uz-Zaman Razi",
//         id:"ID:021 131 002",
//         department:"Department:EEE",
//         bloodgroup: "Bloodgroup:A+"
        
//     }

// ]

const fetchData =async (config) => {
    try{
        const response = await axios(config);
        return response.data;
    }
    catch(error){
        throw Error("Data Is Not Fetched...");
    }
}



/* <div class="post">
<h2>Md Arif-Uz-Zaman Razi</h2>
<p>ID:021 131 002</p>
<p>Department:EEE</p>
<p>Blood Group: A+</p>
</div> */

const postsElement = document.querySelector(".posts");

const loadData =async () => {
    const posts = await fetchData("https://jsonplaceholder.typicode.com/comments");
    posts.map((posts) =>{
        // console.log(posts);
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
        <h2>${posts.name}</h2>
        <p>${posts.email}</p>
        <p>${posts.body}</p>

        `;   
        postsElement.appendChild(postElement); 
    });
};
loadData();