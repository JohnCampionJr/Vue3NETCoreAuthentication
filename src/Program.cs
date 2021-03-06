﻿using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Reinforced.Typings.Attributes;
using VueCliMiddleware;

[assembly: TsGlobal(CamelCaseForMethods = true, CamelCaseForProperties = true, TabSymbol = "  ")]
namespace Blazor5Auth.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            if (!CommandLine.Arguments.TryGetOptions(args, true, out var mode, out var port, out _)) return;

            if (mode == "kill")
            {
                Console.WriteLine($"Killing process serving port {port}...");
                PidUtils.KillPort(port, true, true);
                return;
            }

            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
