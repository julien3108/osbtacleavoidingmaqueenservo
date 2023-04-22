let distanceDevant = 0
let distanceGauche = 0
let distanceDroite = 0
function regarderDroite () {
    maqueen.servoRun(maqueen.Servos.S1, 30)
    basic.pause(200)
}
function regarderDevant () {
    maqueen.servoRun(maqueen.Servos.S1, 90)
    basic.pause(200)
}
function tournerGauche () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 40)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
}
function mesureDistanceDevant () {
    distanceDevant = maqueen.Ultrasonic(PingUnit.Centimeters)
}
function regarderGauche () {
    maqueen.servoRun(maqueen.Servos.S1, 170)
    basic.pause(400)
}
function tournerDroite () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 40)
}
function stopRobot () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 0)
}
function mesureDistanceGauche () {
    distanceGauche = maqueen.Ultrasonic(PingUnit.Centimeters)
}
function mesureDistanceDroite () {
    distanceDroite = maqueen.Ultrasonic(PingUnit.Centimeters)
}
function allerDroit () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
}
basic.forever(function () {
    regarderDevant()
    mesureDistanceDevant()
    if (distanceDevant <= 12) {
        stopRobot()
    } else {
        allerDroit()
    }
    regarderDroite()
    mesureDistanceDroite()
    regarderGauche()
    mesureDistanceGauche()
    if (distanceDevant <= 12) {
        if (distanceDroite > distanceGauche) {
            tournerDroite()
        } else {
            tournerGauche()
        }
    } else if (distanceDroite <= 12) {
        tournerGauche()
    } else if (distanceGauche <= 8) {
        tournerDroite()
    } else {
        allerDroit()
    }
})
