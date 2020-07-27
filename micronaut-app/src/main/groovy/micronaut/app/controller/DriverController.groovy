package micronaut.app.controller

import micronaut.app.service.DriverService
import micronaut.app.domain.Driver
import io.micronaut.http.HttpResponse
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.http.annotation.Post
import io.reactivex.Single

@Controller
class DriverController {

    final DriverService driverService

    DriverController(DriverService driverService) {
        this.driverService = driverService
    }

    @Get("/garage/drivers")
    Single<HttpResponse<?>> list() {
        Single.just(driverService.list()).map({ result ->
            HttpResponse.ok(result)
        }).onErrorReturn({ throwable ->
            ""
        })
    }

    @Post("/garage/drivers/add")
    Single<HttpResponse<?>> add(Driver driver) {
        Single.just(driverService.save(driver)).map({ result ->
            HttpResponse.ok(result)
        }).onErrorReturn({ throwable ->
            ""
        })
    }
}