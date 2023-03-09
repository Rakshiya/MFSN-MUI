<?php
/**
 * OAuth20AuthenticationApi
 * PHP version 7.3
 *
 * @category Class
 * @package  PandaDoc\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * PandaDoc Public API
 *
 * PandaDoc Public API documentation
 *
 * Generated by: https://openapi-generator.tech
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace PandaDoc\Client\Api;

use GuzzleHttp\Client;
use GuzzleHttp\ClientInterface;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Exception\ConnectException;
use GuzzleHttp\Psr7\MultipartStream;
use GuzzleHttp\Psr7\Request;
use GuzzleHttp\RequestOptions;
use PandaDoc\Client\ApiException;
use PandaDoc\Client\Configuration;
use PandaDoc\Client\HeaderSelector;
use PandaDoc\Client\ObjectSerializer;

/**
 * OAuth20AuthenticationApi Class Doc Comment
 *
 * @category Class
 * @package  PandaDoc\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class OAuth20AuthenticationApi
{
    /**
     * @var ClientInterface
     */
    protected $client;

    /**
     * @var Configuration
     */
    protected $config;

    /**
     * @var HeaderSelector
     */
    protected $headerSelector;

    /**
     * @var int Host index
     */
    protected $hostIndex;

    /**
     * @param ClientInterface $client
     * @param Configuration   $config
     * @param HeaderSelector  $selector
     * @param int             $hostIndex (Optional) host index to select the list of hosts if defined in the OpenAPI spec
     */
    public function __construct(
        ClientInterface $client = null,
        Configuration $config = null,
        HeaderSelector $selector = null,
        $hostIndex = 0
    ) {
        $this->client = $client ?: new Client();
        $this->config = $config ?: new Configuration();
        $this->headerSelector = $selector ?: new HeaderSelector();
        $this->hostIndex = $hostIndex;
    }

    /**
     * Set the host index
     *
     * @param int $hostIndex Host index (required)
     */
    public function setHostIndex($hostIndex): void
    {
        $this->hostIndex = $hostIndex;
    }

    /**
     * Get the host index
     *
     * @return int Host index
     */
    public function getHostIndex()
    {
        return $this->hostIndex;
    }

    /**
     * @return Configuration
     */
    public function getConfig()
    {
        return $this->config;
    }

    /**
     * Operation accessToken
     *
     * Create/Refresh Access Token
     *
     * @param  string $grantType This value must be set to &#x60;refresh_token&#x60;. (optional, default to 'refresh_token')
     * @param  string $clientId Client ID that is automatically generated after application creation in the Developer Dashboard. (optional)
     * @param  string $clientSecret Client secret that is automatically generated after application creation in the Developer Dashboard. (optional)
     * @param  string $code &#x60;auth_code&#x60; from the server on the previous step (Authorize a PandaDoc User). (optional)
     * @param  string $scope Requested permissions. Use &#x60;read+write&#x60; as our default value to send documents. (optional)
     * @param  string $refreshToken &#x60;refresh_token&#x60; you received and stored from the server when initially creating an &#x60;access_token&#x60;. (optional)
     *
     * @throws \PandaDoc\Client\ApiException on non-2xx response
     * @throws \InvalidArgumentException
     * @return \PandaDoc\Client\Model\OAuth2AccessTokenResponse|object
     */
    public function accessToken($grantType = 'refresh_token', $clientId = null, $clientSecret = null, $code = null, $scope = null, $refreshToken = null)
    {
        list($response) = $this->accessTokenWithHttpInfo($grantType, $clientId, $clientSecret, $code, $scope, $refreshToken);
        return $response;
    }

    /**
     * Operation accessTokenWithHttpInfo
     *
     * Create/Refresh Access Token
     *
     * @param  string $grantType This value must be set to &#x60;refresh_token&#x60;. (optional, default to 'refresh_token')
     * @param  string $clientId Client ID that is automatically generated after application creation in the Developer Dashboard. (optional)
     * @param  string $clientSecret Client secret that is automatically generated after application creation in the Developer Dashboard. (optional)
     * @param  string $code &#x60;auth_code&#x60; from the server on the previous step (Authorize a PandaDoc User). (optional)
     * @param  string $scope Requested permissions. Use &#x60;read+write&#x60; as our default value to send documents. (optional)
     * @param  string $refreshToken &#x60;refresh_token&#x60; you received and stored from the server when initially creating an &#x60;access_token&#x60;. (optional)
     *
     * @throws \PandaDoc\Client\ApiException on non-2xx response
     * @throws \InvalidArgumentException
     * @return array of \PandaDoc\Client\Model\OAuth2AccessTokenResponse|object, HTTP status code, HTTP response headers (array of strings)
     */
    public function accessTokenWithHttpInfo($grantType = 'refresh_token', $clientId = null, $clientSecret = null, $code = null, $scope = null, $refreshToken = null)
    {
        $request = $this->accessTokenRequest($grantType, $clientId, $clientSecret, $code, $scope, $refreshToken);

        try {
            $options = $this->createHttpClientOption();
            try {
                $response = $this->client->send($request, $options);
            } catch (RequestException $e) {
                throw new ApiException(
                    "[{$e->getCode()}] {$e->getMessage()}",
                    (int) $e->getCode(),
                    $e->getResponse() ? $e->getResponse()->getHeaders() : null,
                    $e->getResponse() ? (string) $e->getResponse()->getBody() : null
                );
            } catch (ConnectException $e) {
                throw new ApiException(
                    "[{$e->getCode()}] {$e->getMessage()}",
                    (int) $e->getCode(),
                    null,
                    null
                );
            }

            $statusCode = $response->getStatusCode();

            if ($statusCode < 200 || $statusCode > 299) {
                throw new ApiException(
                    sprintf(
                        '[%d] Error connecting to the API (%s)',
                        $statusCode,
                        (string) $request->getUri()
                    ),
                    $statusCode,
                    $response->getHeaders(),
                    (string) $response->getBody()
                );
            }

            switch($statusCode) {
                case 200:
                    if ('\PandaDoc\Client\Model\OAuth2AccessTokenResponse' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\PandaDoc\Client\Model\OAuth2AccessTokenResponse', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                case 400:
                    if ('object' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                    }

                    return [
                        ObjectSerializer::deserialize($content, 'object', []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
            }

            $returnType = '\PandaDoc\Client\Model\OAuth2AccessTokenResponse';
            if ($returnType === '\SplFileObject') {
                $content = $response->getBody(); //stream goes to serializer
            } else {
                $content = (string) $response->getBody();
            }

            return [
                ObjectSerializer::deserialize($content, $returnType, []),
                $response->getStatusCode(),
                $response->getHeaders()
            ];

        } catch (ApiException $e) {
            switch ($e->getCode()) {
                case 200:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        '\PandaDoc\Client\Model\OAuth2AccessTokenResponse',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
                case 400:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        'object',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
            }
            throw $e;
        }
    }

    /**
     * Operation accessTokenAsync
     *
     * Create/Refresh Access Token
     *
     * @param  string $grantType This value must be set to &#x60;refresh_token&#x60;. (optional, default to 'refresh_token')
     * @param  string $clientId Client ID that is automatically generated after application creation in the Developer Dashboard. (optional)
     * @param  string $clientSecret Client secret that is automatically generated after application creation in the Developer Dashboard. (optional)
     * @param  string $code &#x60;auth_code&#x60; from the server on the previous step (Authorize a PandaDoc User). (optional)
     * @param  string $scope Requested permissions. Use &#x60;read+write&#x60; as our default value to send documents. (optional)
     * @param  string $refreshToken &#x60;refresh_token&#x60; you received and stored from the server when initially creating an &#x60;access_token&#x60;. (optional)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function accessTokenAsync($grantType = 'refresh_token', $clientId = null, $clientSecret = null, $code = null, $scope = null, $refreshToken = null)
    {
        return $this->accessTokenAsyncWithHttpInfo($grantType, $clientId, $clientSecret, $code, $scope, $refreshToken)
            ->then(
                function ($response) {
                    return $response[0];
                }
            );
    }

    /**
     * Operation accessTokenAsyncWithHttpInfo
     *
     * Create/Refresh Access Token
     *
     * @param  string $grantType This value must be set to &#x60;refresh_token&#x60;. (optional, default to 'refresh_token')
     * @param  string $clientId Client ID that is automatically generated after application creation in the Developer Dashboard. (optional)
     * @param  string $clientSecret Client secret that is automatically generated after application creation in the Developer Dashboard. (optional)
     * @param  string $code &#x60;auth_code&#x60; from the server on the previous step (Authorize a PandaDoc User). (optional)
     * @param  string $scope Requested permissions. Use &#x60;read+write&#x60; as our default value to send documents. (optional)
     * @param  string $refreshToken &#x60;refresh_token&#x60; you received and stored from the server when initially creating an &#x60;access_token&#x60;. (optional)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function accessTokenAsyncWithHttpInfo($grantType = 'refresh_token', $clientId = null, $clientSecret = null, $code = null, $scope = null, $refreshToken = null)
    {
        $returnType = '\PandaDoc\Client\Model\OAuth2AccessTokenResponse';
        $request = $this->accessTokenRequest($grantType, $clientId, $clientSecret, $code, $scope, $refreshToken);

        return $this->client
            ->sendAsync($request, $this->createHttpClientOption())
            ->then(
                function ($response) use ($returnType) {
                    if ($returnType === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                    }

                    return [
                        ObjectSerializer::deserialize($content, $returnType, []),
                        $response->getStatusCode(),
                        $response->getHeaders()
                    ];
                },
                function ($exception) {
                    $response = $exception->getResponse();
                    $statusCode = $response->getStatusCode();
                    throw new ApiException(
                        sprintf(
                            '[%d] Error connecting to the API (%s)',
                            $statusCode,
                            $exception->getRequest()->getUri()
                        ),
                        $statusCode,
                        $response->getHeaders(),
                        (string) $response->getBody()
                    );
                }
            );
    }

    /**
     * Create request for operation 'accessToken'
     *
     * @param  string $grantType This value must be set to &#x60;refresh_token&#x60;. (optional, default to 'refresh_token')
     * @param  string $clientId Client ID that is automatically generated after application creation in the Developer Dashboard. (optional)
     * @param  string $clientSecret Client secret that is automatically generated after application creation in the Developer Dashboard. (optional)
     * @param  string $code &#x60;auth_code&#x60; from the server on the previous step (Authorize a PandaDoc User). (optional)
     * @param  string $scope Requested permissions. Use &#x60;read+write&#x60; as our default value to send documents. (optional)
     * @param  string $refreshToken &#x60;refresh_token&#x60; you received and stored from the server when initially creating an &#x60;access_token&#x60;. (optional)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Psr7\Request
     */
    public function accessTokenRequest($grantType = 'refresh_token', $clientId = null, $clientSecret = null, $code = null, $scope = null, $refreshToken = null)
    {

        $resourcePath = '/oauth2/access_token';
        $formParams = [];
        $queryParams = [];
        $headerParams = [];
        $httpBody = '';
        $multipart = false;




        // form params
        if ($grantType !== null) {
            $formParams['grant_type'] = ObjectSerializer::toFormValue($grantType);
        }
        // form params
        if ($clientId !== null) {
            $formParams['client_id'] = ObjectSerializer::toFormValue($clientId);
        }
        // form params
        if ($clientSecret !== null) {
            $formParams['client_secret'] = ObjectSerializer::toFormValue($clientSecret);
        }
        // form params
        if ($code !== null) {
            $formParams['code'] = ObjectSerializer::toFormValue($code);
        }
        // form params
        if ($scope !== null) {
            $formParams['scope'] = ObjectSerializer::toFormValue($scope);
        }
        // form params
        if ($refreshToken !== null) {
            $formParams['refresh_token'] = ObjectSerializer::toFormValue($refreshToken);
        }

        if ($multipart) {
            $headers = $this->headerSelector->selectHeadersForMultipart(
                ['application/json']
            );
        } else {
            $headers = $this->headerSelector->selectHeaders(
                ['application/json'],
                ['application/x-www-form-urlencoded']
            );
        }

        // for model (json/xml)
        if (count($formParams) > 0) {
            if ($multipart) {
                $multipartContents = [];
                foreach ($formParams as $formParamName => $formParamValue) {
                    $formParamValueItems = is_array($formParamValue) ? $formParamValue : [$formParamValue];
                    foreach ($formParamValueItems as $formParamValueItem) {
                        $multipartContents[] = [
                            'name' => $formParamName,
                            'contents' => $formParamValueItem
                        ];
                    }
                }
                // for HTTP post (form)
                $httpBody = new MultipartStream($multipartContents);

            } elseif ($headers['Content-Type'] === 'application/json') {
                $httpBody = \GuzzleHttp\json_encode($formParams);

            } else {
                // for HTTP post (form)
                $httpBody = \GuzzleHttp\Psr7\Query::build($formParams);
            }
        }

        // this endpoint requires API key authentication
        $apiKey = $this->config->getApiKeyWithPrefix('Authorization');
        if ($apiKey !== null) {
            $headers['Authorization'] = $apiKey;
        }
        // this endpoint requires OAuth (access token)
        if ($this->config->getAccessToken() != null) {
            $headers['Authorization'] = 'Bearer ' . $this->config->getAccessToken();
        }

        $defaultHeaders = [];
        if ($this->config->getUserAgent()) {
            $defaultHeaders['User-Agent'] = $this->config->getUserAgent();
        }

        $headers = array_merge(
            $defaultHeaders,
            $headerParams,
            $headers
        );

        $query = \GuzzleHttp\Psr7\Query::build($queryParams);
        return new Request(
            'POST',
            $this->config->getHost() . $resourcePath . ($query ? "?{$query}" : ''),
            $headers,
            $httpBody
        );
    }

    /**
     * Create http client option
     *
     * @throws \RuntimeException on file opening failure
     * @return array of http client options
     */
    protected function createHttpClientOption()
    {
        $options = [];
        if ($this->config->getDebug()) {
            $options[RequestOptions::DEBUG] = fopen($this->config->getDebugFile(), 'a');
            if (!$options[RequestOptions::DEBUG]) {
                throw new \RuntimeException('Failed to open the debug file: ' . $this->config->getDebugFile());
            }
        }

        return $options;
    }
}
