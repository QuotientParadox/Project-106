function StartClassification()
{
    //prompts the user to get access to microphoes and cameras
    navigator.mediaDevices.getUserMedia({audio: true});
    //Put new link and also put .json at the end
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XiuaXdxlD/model.json', modelReady);
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

        img = document.getElementById('animal_image');
        if (results[0].label == "Barking")
        {
             img.src = 'bark.gif';
        }
        else if
        (results[0].label == "Meowing")
        {
            img.src = 'meow.gif';
        }
        else
        {
            img.src = 'listen.gif';
        }
    }
}