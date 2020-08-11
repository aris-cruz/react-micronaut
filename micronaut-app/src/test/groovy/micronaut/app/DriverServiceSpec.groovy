package micronaut.app

import io.micronaut.test.annotation.MicronautTest
import spock.lang.Specification
import javax.inject.Inject
import micronaut.app.service.DriverService

@MicronautTest
class DriverServiceSpec extends Specification {

    @Inject
    DriverService driverService

    void "test list"() {
        given:
        def listSize = 6

        when:
        def result = driverService.list()

        then:
        listSize == result.size()
    }
}