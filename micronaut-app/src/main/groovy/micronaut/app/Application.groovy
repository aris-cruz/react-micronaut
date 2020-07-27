package micronaut.app

import io.micronaut.runtime.Micronaut
import groovy.transform.CompileStatic
import micronaut.app.service.*

@CompileStatic
class Application {

    final DriverService driverService
    final MakeService makeService
    final ModelService modelService

    Application(DriverService driverService, MakeService makeService, ModelService modelService) {
        this.driverService = driverService
        this.makeService = makeService
        this.modelService = modelService
    }

    static void main(String[] args) {
        Micronaut.run(Application)
    }
}
