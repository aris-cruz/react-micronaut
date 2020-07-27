package micronaut.app.controller

import micronaut.app.service.ModelService
import micronaut.app.domain.Model
import io.micronaut.http.HttpResponse
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.http.annotation.Post
import io.reactivex.Single

@Controller
class ModelController {

    final ModelService modelService

    ModelController(ModelService modelService) {
        this.modelService = modelService
    }

    @Get("/garage/models")
    Single<HttpResponse<?>> list() {
        Single.just(modelService.list()).map({ result ->
            HttpResponse.ok(result)
        }).onErrorReturn({ throwable ->
            ""
        })
    }

    @Post("/garage/models/add")
    Single<HttpResponse<?>> add(Model model) {
        Single.just(modelService.save(model)).map({ result ->
            HttpResponse.ok(result)
        }).onErrorReturn({ throwable ->
            ""
        })
    }
}