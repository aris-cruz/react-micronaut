package micronaut.app.controller

import micronaut.app.service.VehicleService
import micronaut.app.domain.Vehicle
import io.micronaut.http.HttpResponse
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.http.annotation.Post
import io.reactivex.Single

@Controller
class VehicleController {

    final VehicleService vehicleService

    VehicleController(VehicleService vehicleService) {
        this.vehicleService = vehicleService
    }

    @Get("/garage/vehicles")
    Single<HttpResponse<?>> list() {
        Single.just(vehicleService.list()).map({ result ->
            HttpResponse.ok(result)
        }).onErrorReturn({ throwable ->
            ""
        })
    }

    @Post("/garage/vehicles/add")
    Single<HttpResponse<?>> add(Vehicle vehicle) {
        Single.just(vehicleService.save(vehicle)).map({ result ->
            HttpResponse.ok(result)
        }).onErrorReturn({ throwable ->
            ""
        })
    }
}