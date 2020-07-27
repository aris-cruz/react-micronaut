package micronaut.app.controller

import micronaut.app.service.MakeService
import micronaut.app.domain.Make
import io.micronaut.http.HttpResponse
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.http.annotation.Post
import io.reactivex.Single

@Controller
class MakeController {

    final MakeService makeService

    MakeController(MakeService makeService) {
        this.makeService = makeService
    }

    @Get("/garage/makes")
    Single<HttpResponse<?>> list() {
        Single.just(makeService.list()).map({ result ->
            HttpResponse.ok(result)
        }).onErrorReturn({ throwable ->
            ""
        })
    }

    @Post("/garage/makes/add")
    Single<HttpResponse<?>> add(Make make) {
        Single.just(makeService.save(make)).map({ result ->
            HttpResponse.ok(result)
        }).onErrorReturn({ throwable ->
            ""
        })
    }
}