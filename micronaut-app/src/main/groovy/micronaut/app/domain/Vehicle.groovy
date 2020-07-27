package micronaut.app.domain

import grails.gorm.annotation.Entity

@Entity
class Vehicle {

    String name
    Make make
    Model model

    static belongsTo = [driver: Driver]

    static constraints = {
        driver lazy: false
        make lazy: false
        model lazy: false
    }
}