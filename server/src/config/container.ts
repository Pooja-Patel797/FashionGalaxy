import { HomeService } from "../services/home";
import { Container } from "inversify";
import { UsersService } from "../services/user";
import TYPES from "../constant/types";
import { ProductsService } from "../services/product";
import { CommentsService } from "../services/comment";
import {CartsService} from "../services/cart";

export class ContainerConfigLoader {
  public static Load(): Container {
    const container = new Container();
    container.bind<HomeService>(TYPES.HomeService).to(HomeService);
    container.bind<UsersService>(TYPES.UsersService).to(UsersService);
    container.bind<ProductsService>(TYPES.ProductsService).to(ProductsService);
    container.bind<CommentsService>(TYPES.CommentsService).to(CommentsService);
    container.bind<CartsService>(TYPES.CartsService).to(CartsService);

    return container;
  }
}
