import { Label, Textarea } from "flowbite-react";

export default function AreaField({ register, name, errors }) {
  const Name = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <>
      <div className="w-full py-3">
        <div className="mb-2 block ">
          <Label
            htmlFor={name}
            color={errors[name] && "failure"}
            value={Name}
          />
        </div>
        <Textarea
          {...register(name, {
            required: `${name} is requierd`,
          })}
          // defaultValue={book ? book.description : ""}
          id={name}
          placeholder="Leave a description..."
          color={errors[name] && "failure"}
          helperText={
            errors[name] && (
              <>
                <span className="font-medium">
                  {errors[name]?.message.charAt(0).toUpperCase() +
                    errors[name]?.message.slice(1)}
                </span>
              </>
            )
          }
          rows={4}
        />
      </div>
    </>
  );
}
