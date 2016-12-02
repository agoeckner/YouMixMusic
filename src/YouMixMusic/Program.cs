using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

using YouMixMusic.Models;

namespace YouMixMusic
{
    public class Program
    {
		public static ProgramState PROGRAM_STATE;

        public static void Main(string[] args)
        {
			PROGRAM_STATE = new ProgramState();

            var config = new ConfigurationBuilder()
                .AddCommandLine(args)
                .Build();

            var host = new WebHostBuilder()
                .UseKestrel()
                .UseConfiguration(config)
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

			// Set up the database handler.
			DatabaseHandler database = new DatabaseHandler(config["Database:ConnectionStrings:DefaultConnection"]);
			PROGRAM_STATE.database = database;
			database.Connect();
			database._GenerateDatabase();

			host.Run();
        }
    }

	public class ProgramState
	{
		public DatabaseHandler database;
	}
}
