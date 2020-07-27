package micronaut.app.service

import grails.gorm.services.Service
import groovy.transform.CompileStatic
import micronaut.app.domain.Model

@Service(Model)
@CompileStatic
interface ModelService {

    Model get(Serializable id)

    List<Model> list(Map args)

    Long count()

    Model save(Model model)
}