package micronaut.app.service

import grails.gorm.services.Service
import groovy.transform.CompileStatic
import micronaut.app.domain.Driver

@Service(Driver)
@CompileStatic
interface DriverService {

    Driver get(Serializable id)

    List<Driver> list(Map args)

    Long count()

    Driver save(Driver driver)
}