import { Users } from '../users/users.entity';
import { UserDto } from '../users/dto/user.dto';

export const toUserDto = (data: Users): UserDto => {
  const {
    StudentID,
    UserName,
    Email,
    UserRole,
    //PrefixT,
    Name,
    Faculty,
    Major,
  
    Password,
    //FNameE,
    //LNameE,
  } = data;

  let roles_ = '';
  roles_ = roles_.substring(0, roles_.length - 1);

  const userDto: UserDto = {
    StudentID,
    UserName,
    Email,
    UserRole,
    //PrefixT,
    Name,
    Faculty,
    Major,
    Password,
    //FNameE,
    //LNameE,

  };

  return userDto;
};
