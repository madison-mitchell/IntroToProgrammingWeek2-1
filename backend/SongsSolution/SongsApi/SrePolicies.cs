using Polly;
using Polly.Extensions.Http;

namespace SongsApi;

public static class SrePolicies
{

    public static IAsyncPolicy<HttpResponseMessage> GetRetryPolicy()
    {
        return HttpPolicyExtensions
            .HandleTransientHttpError()
            .OrResult(msg => msg.StatusCode == System.Net.HttpStatusCode.NotFound)
            .WaitAndRetryAsync(6, retryAttempts => TimeSpan.FromSeconds(Math.Pow(2, retryAttempts)));
    }

    public static IAsyncPolicy<HttpResponseMessage> GetCircuitBreaker()
    {
        return HttpPolicyExtensions
            .HandleTransientHttpError()
            .OrResult(msg => msg.StatusCode == System.Net.HttpStatusCode.NotFound)
            .CircuitBreakerAsync(3, TimeSpan.FromSeconds(30));
    }
}
