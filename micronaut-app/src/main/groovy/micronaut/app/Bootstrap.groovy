package micronaut.app

import micronaut.app.service.*
import micronaut.app.domain.*
import io.micronaut.context.event.StartupEvent
import io.micronaut.runtime.event.annotation.EventListener
import javax.inject.Singleton

@Singleton
class Bootstrap {

    final DriverService driverService
    final MakeService makeService
    final ModelService modelService

    Bootstrap(DriverService driverService, MakeService makeService, ModelService modelService) {
        this.driverService = driverService
        this.makeService = makeService
        this.modelService = modelService
    }

    @EventListener
    void onStartup(StartupEvent event) {
        driverService.save(new Driver(name: 'Chris Hemsworth'))
        driverService.save(new Driver(name: 'Robert Downy Jr'))
        driverService.save(new Driver(name: 'Will Smith'))
        driverService.save(new Driver(name: 'Dwayne Johnson'))
        driverService.save(new Driver(name: 'Kevin Hart'))
        driverService.save(new Driver(name: 'Keanu Reeves'))

        makeService.save(new Make(name: 'Toyota'))
        makeService.save(new Make(name: 'Honda'))
        makeService.save(new Make(name: 'Nissan'))
        makeService.save(new Make(name: 'Tesla'))
        makeService.save(new Make(name: 'Ford'))
        makeService.save(new Make(name: 'Audi'))

        modelService.save(new Model(name: 'Fortuner'))
        modelService.save(new Model(name: 'Civic'))
        modelService.save(new Model(name: 'Navarra'))
        modelService.save(new Model(name: 'Model S'))
        modelService.save(new Model(name: 'Raptor'))
        modelService.save(new Model(name: 'Audi A4'))

    }
}