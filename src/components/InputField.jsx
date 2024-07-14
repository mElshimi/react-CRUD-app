import { Label, TextInput } from "flowbite-react";

export default function InputField({ register, name, errors }) {
  const Name = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <>
      <div className="w-full py-2">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor={name}
              color={errors[name] && "failure"}
              value={Name}
            />
          </div>
          <TextInput
            {...register(name, {
              required: `${name} is requierd`,
            })}
            // defaultValue={book ? book.title : ""}
            id={name}
            color={errors[name] && "failure"}
            placeholder={`Post ${Name}`}
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
          />
        </div>
      </div>
    </>
  );
}
