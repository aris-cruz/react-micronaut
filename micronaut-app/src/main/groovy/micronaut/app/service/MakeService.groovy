package micronaut.app.service

import grails.gorm.services.Service
import groovy.transform.CompileStatic
import micronaut.app.domain.Make

@Service(Make)
@CompileStatic
interface MakeService {

    Make get(Serializable id)

    List<Make> list(Map args)

    Long count()

    Make save(Make make)
}