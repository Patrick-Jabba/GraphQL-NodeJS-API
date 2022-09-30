import { Mutation, Query, Resolver, Arg, FieldResolver, Root } from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { AppointmentModel } from "../dtos/models/appointment-model";
import { CustomerModel } from "../dtos/models/customer-model";

@Resolver(() => AppointmentModel)
export class AppointmentsResolver {
  @Query(() => [AppointmentModel])
  async appointments() {
    return [
      {
        starsAt: new Date(),
        endsAt: new Date(),
      }
    ];
  }

  @Mutation(() => AppointmentModel)
  async createAppointment(@Arg('data') data: CreateAppointmentInput) {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    }

    return appointment;
  }

  @FieldResolver(() => CustomerModel)
  async customer(@Root() appointment: AppointmentModel) {
    console.log(appointment);

    return {
      name: 'Jon Doe',
    }
  }
}