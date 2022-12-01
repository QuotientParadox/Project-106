function StartClassification()
{
    //prompts the user to get access to microphoes and cameras
    navigator.mediaDevices.getUserMedia({audio: true});
    //used to trigger sound classification function
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XiuaXdxlD/', modelReady);
}
function modelReady()
{
    //classifies sounds
    classifier.classify(gotResults);
    console.log("got result")
}
function gotResults(error, results)
{
    if(error)https://prod.liveshare.vsengsaas.visualstudio.com/join?351D34E2AB327A9EBE3541CA26B3BF5A8A7C
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        random_R = Math.floor(Math.random()*255)+1;
        random_G = Math.floor(Math.random()*255)+1;
        random_B = Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML = "I can hear: "+results[0].label;
        document.getElementById("result_confidence").innerHTML = "accuracy : "+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_R+","+random_G+","+random_B+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_R+","+random_G+","+random_B+")";

        img1 = document.getElementById("alien1");
        img2 = document.getElementById("alien2");
        img3 = document.getElementById("alien3");
        img4 = document.getElementById("alien4");
        //input sound's and gif's here
        if(results[0].label == "Lion")
        {
            img1.src = "Lion.gif";
            img2.src = "cat.jpeg";
            img3.src = "Cow.jpg";
            img4.src = "Dog.jpg";
        }
        else if(results[0].label == "Cat")
        {
            img1.src = "Lion.jpg";
            img2.src = "Cat.gif";
            img3.src = "Cow.jpg";
            img4.src = "Dog.jpg";
        }
        else if(results[0].label == "Cow")
        {
            img1.src = "Lion.jpg";
            img2.src = "cat.jpeg";
            img3.src = "Cow.gif";
            img4.src = "Dog.jpg";
        }
        else if(results[0].label == "Dog")
        {
            img1.src = "Lion.jpg";
            img2.src = "cat.jpeg";
            img3.src = "Cow.jpg";
            img4.src = "Dog.gif";
        }
        else
        {
            img1.src = "Lion.jpg";
            img2.src = "cat.jpeg";
            img3.src = "Cow.jpg";
            img4.src = "Dog.jpg";
        }
    }
}