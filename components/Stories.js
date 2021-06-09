
import StoryCard from "./StoryCard";

const Stories = [
{
    name: "hero",
    src:"https://www.osevio.com/blog/wp-content/uploads/2018/10/osevio-blog-doga-resimleri-one-cikarilmis-gorsel.jpg",
    profile: "https://www.osevio.com/blog/wp-content/uploads/2018/10/osevio-blog-doga-resimleri-one-cikarilmis-gorsel.jpg",
},
{
    name: "herotwo",
    src:"https://lh3.googleusercontent.com/proxy/1JIDYe-CekjBfdvdbRp8WiVlnEMqgMAPN22yBk7GoEfbNUu7gxPEs5gTbarATx9qvC26mbDRnR4RVRhEM-5TM9ztT7-wFmRsminuv9WdMw6Z2IgERMwRsIt94jSRxWzlFxuh-haOr93a-qCP0A",
    profile: "https://lh3.googleusercontent.com/proxy/1JIDYe-CekjBfdvdbRp8WiVlnEMqgMAPN22yBk7GoEfbNUu7gxPEs5gTbarATx9qvC26mbDRnR4RVRhEM-5TM9ztT7-wFmRsminuv9WdMw6Z2IgERMwRsIt94jSRxWzlFxuh-haOr93a-qCP0A",
},

{
    name: "herothree",
    src:"https://www.manzara.gen.tr/w1/Avusturya-Bavyeras%C4%B1.jpeg",
    profile: "https://www.manzara.gen.tr/w1/Avusturya-Bavyeras%C4%B1.jpeg",
},

{
    name: "herofour",
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxfvNVnKRMuf7vz63GAakcDRNnZLlRS7eJXw&usqp=CAU",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxfvNVnKRMuf7vz63GAakcDRNnZLlRS7eJXw&usqp=CAU",
},
{
    name: "herofive",
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeQxqHmXxUK54jy5KeD3ZQ3PeghqbeQZwzAg&usqp=CAU",
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeQxqHmXxUK54jy5KeD3ZQ3PeghqbeQZwzAg&usqp=CAU",
},

];



function Stories(){
        return 
        <div  className="flex justify-center space-x-3 mx-auto">
            <h1>
                Testing
            </h1>
            {stories .map (story => (
                <StoryCard  
                key={story.src} 
                name={story .name}
                 src={story.src} 
                     profile={story.profile} />   
            ))}


        </div>;

}

export default Stories;