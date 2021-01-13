﻿using Features.Base;
using FluentValidation;
using MediatR;
using Reinforced.Typings.Attributes;

namespace Features.Account.Manage
{
    public class MfaInfo
    {
        public class Query : IRequest<Result> { }

        [TsInterface(Name = "MfaInfo")]
        public class Result : BaseResult
        {
            public bool HasAuthenticator { get; set; }
            public int RecoveryCodesLeft { get; set; }
            public bool IsMfaEnabled { get; set; }
            public bool IsMachineRemembered { get; set; }
        }

        //this is here for easy navigation with goto implementation
        public interface IQueryHandler : IRequestHandler<Query, Result> { }

    }
}
