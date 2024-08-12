import {question} from 'readline-sync'
function main(){
    //Input
    const sms = parseFloat(question("Enter a speed in m/s: "))

    //Processing
    const skm = sms * 3.6

    //Output
    console.log(`The entered speed of ${sms} m/s converted to k/h is: ${skm} k/h`)

}

main()

