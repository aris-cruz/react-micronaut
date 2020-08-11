package micronaut.app

import io.micronaut.test.annotation.MicronautTest
import spock.lang.Specification
import javax.inject.Inject
import micronaut.app.service.ModelService

@MicronautTest
class ModelServiceSpec extends Specification {

    @Inject
    ModelService modelService

    void "test list"() {
        given:
        def listSize = 6

        when:
        def result = modelService.list()

        then:
        listSize == result.size()
    }
}