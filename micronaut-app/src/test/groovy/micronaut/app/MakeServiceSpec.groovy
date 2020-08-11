package micronaut.app

import io.micronaut.test.annotation.MicronautTest
import spock.lang.Specification
import javax.inject.Inject
import micronaut.app.service.MakeService

@MicronautTest
class MakeServiceSpec extends Specification {

    @Inject
    MakeService makeService

    void "test list"() {
        given:
        def listSize = 6

        when:
        def result = makeService.list()

        then:
        listSize == result.size()
    }
}