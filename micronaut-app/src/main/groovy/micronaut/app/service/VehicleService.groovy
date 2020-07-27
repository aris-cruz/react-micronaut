package micronaut.app.service

import grails.gorm.services.Service
import groovy.transform.CompileStatic
import micronaut.app.domain.Vehicle

@Service(Vehicle)
@CompileStatic
interface VehicleService {

    Vehicle get(Serializable id)

    List<Vehicle> list(Map args)

    Long count()

    Vehicle save(Vehicle vehicle)
}