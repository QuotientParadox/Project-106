function StartClassification()
{
    //prompts the user to get access to microphoes and cameras
    navigator.mediaDevices.getUserMedia({audio: true});
    //used to trigger sond classification function
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/GpoeHGrbn/model.json', modelReady);
}
function modelReady()
{
    //classifies sounds
    classifier.classify(gotResults);
    console.log("got result")
}
function gotResults(error, results)
{
    if(error)
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

        if(results[0].label == "Clapping")
        {
            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if(results[0].label == "Snapping")
        {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";
        }
        else if(results[0].label == "Bell")
        {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
        }
        else
        {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";
        }
    }
}