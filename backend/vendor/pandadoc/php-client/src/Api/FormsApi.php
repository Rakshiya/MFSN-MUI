<?php
/**
 * FormsApi
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
 * FormsApi Class Doc Comment
 *
 * @category Class
 * @package  PandaDoc\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class FormsApi
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
     * Operation listForm
     *
     * Forms
     *
     * @param  int $count Optionally, specify how many forms to return. Default is 50 forms, maximum is 100 forms. (optional)
     * @param  int $page Optionally, specify which page of the dataset to return. (optional)
     * @param  string[] $status Optionally, specify which status of the forms dataset to return. (optional)
     * @param  string $orderBy Optionally, specify the form dataset order to return. (optional)
     * @param  bool $asc Optionally, specify sorting the result-set in ascending or descending order. (optional)
     * @param  string $name Specify the form name. (optional)
     *
     * @throws \PandaDoc\Client\ApiException on non-2xx response
     * @throws \InvalidArgumentException
     * @return \PandaDoc\Client\Model\FormListResponse|object|object|object
     */
    public function listForm($count = null, $page = null, $status = null, $orderBy = null, $asc = null, $name = null)
    {
        list($response) = $this->listFormWithHttpInfo($count, $page, $status, $orderBy, $asc, $name);
        return $response;
    }

    /**
     * Operation listFormWithHttpInfo
     *
     * Forms
     *
     * @param  int $count Optionally, specify how many forms to return. Default is 50 forms, maximum is 100 forms. (optional)
     * @param  int $page Optionally, specify which page of the dataset to return. (optional)
     * @param  string[] $status Optionally, specify which status of the forms dataset to return. (optional)
     * @param  string $orderBy Optionally, specify the form dataset order to return. (optional)
     * @param  bool $asc Optionally, specify sorting the result-set in ascending or descending order. (optional)
     * @param  string $name Specify the form name. (optional)
     *
     * @throws \PandaDoc\Client\ApiException on non-2xx response
     * @throws \InvalidArgumentException
     * @return array of \PandaDoc\Client\Model\FormListResponse|object|object|object, HTTP status code, HTTP response headers (array of strings)
     */
    public function listFormWithHttpInfo($count = null, $page = null, $status = null, $orderBy = null, $asc = null, $name = null)
    {
        $request = $this->listFormRequest($count, $page, $status, $orderBy, $asc, $name);

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
                    if ('\PandaDoc\Client\Model\FormListResponse' === '\SplFileObject') {
                        $content = $response->getBody(); //stream goes to serializer
                    } else {
                        $content = (string) $response->getBody();
                    }

                    return [
                        ObjectSerializer::deserialize($content, '\PandaDoc\Client\Model\FormListResponse', []),
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
                case 401:
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
                case 429:
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

            $returnType = '\PandaDoc\Client\Model\FormListResponse';
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
                        '\PandaDoc\Client\Model\FormListResponse',
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
                case 401:
                    $data = ObjectSerializer::deserialize(
                        $e->getResponseBody(),
                        'object',
                        $e->getResponseHeaders()
                    );
                    $e->setResponseObject($data);
                    break;
                case 429:
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
     * Operation listFormAsync
     *
     * Forms
     *
     * @param  int $count Optionally, specify how many forms to return. Default is 50 forms, maximum is 100 forms. (optional)
     * @param  int $page Optionally, specify which page of the dataset to return. (optional)
     * @param  string[] $status Optionally, specify which status of the forms dataset to return. (optional)
     * @param  string $orderBy Optionally, specify the form dataset order to return. (optional)
     * @param  bool $asc Optionally, specify sorting the result-set in ascending or descending order. (optional)
     * @param  string $name Specify the form name. (optional)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function listFormAsync($count = null, $page = null, $status = null, $orderBy = null, $asc = null, $name = null)
    {
        return $this->listFormAsyncWithHttpInfo($count, $page, $status, $orderBy, $asc, $name)
            ->then(
                function ($response) {
                    return $response[0];
                }
            );
    }

    /**
     * Operation listFormAsyncWithHttpInfo
     *
     * Forms
     *
     * @param  int $count Optionally, specify how many forms to return. Default is 50 forms, maximum is 100 forms. (optional)
     * @param  int $page Optionally, specify which page of the dataset to return. (optional)
     * @param  string[] $status Optionally, specify which status of the forms dataset to return. (optional)
     * @param  string $orderBy Optionally, specify the form dataset order to return. (optional)
     * @param  bool $asc Optionally, specify sorting the result-set in ascending or descending order. (optional)
     * @param  string $name Specify the form name. (optional)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Promise\PromiseInterface
     */
    public function listFormAsyncWithHttpInfo($count = null, $page = null, $status = null, $orderBy = null, $asc = null, $name = null)
    {
        $returnType = '\PandaDoc\Client\Model\FormListResponse';
        $request = $this->listFormRequest($count, $page, $status, $orderBy, $asc, $name);

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
     * Create request for operation 'listForm'
     *
     * @param  int $count Optionally, specify how many forms to return. Default is 50 forms, maximum is 100 forms. (optional)
     * @param  int $page Optionally, specify which page of the dataset to return. (optional)
     * @param  string[] $status Optionally, specify which status of the forms dataset to return. (optional)
     * @param  string $orderBy Optionally, specify the form dataset order to return. (optional)
     * @param  bool $asc Optionally, specify sorting the result-set in ascending or descending order. (optional)
     * @param  string $name Specify the form name. (optional)
     *
     * @throws \InvalidArgumentException
     * @return \GuzzleHttp\Psr7\Request
     */
    public function listFormRequest($count = null, $page = null, $status = null, $orderBy = null, $asc = null, $name = null)
    {
        if ($count !== null && $count < 1) {
            throw new \InvalidArgumentException('invalid value for "$count" when calling FormsApi.listForm, must be bigger than or equal to 1.');
        }

        if ($page !== null && $page < 1) {
            throw new \InvalidArgumentException('invalid value for "$page" when calling FormsApi.listForm, must be bigger than or equal to 1.');
        }


        $resourcePath = '/public/v1/forms';
        $formParams = [];
        $queryParams = [];
        $headerParams = [];
        $httpBody = '';
        $multipart = false;

        // query params
        if ($count !== null) {
            if('form' === 'form' && is_array($count)) {
                foreach($count as $key => $value) {
                    $queryParams[$key] = $value;
                }
            }
            else {
                $queryParams['count'] = $count;
            }
        }
        // query params
        if ($page !== null) {
            if('form' === 'form' && is_array($page)) {
                foreach($page as $key => $value) {
                    $queryParams[$key] = $value;
                }
            }
            else {
                $queryParams['page'] = $page;
            }
        }
        // query params
        if ($status !== null) {
            if('form' === 'form' && is_array($status)) {
                foreach($status as $key => $value) {
                    $queryParams[$key] = $value;
                }
            }
            else {
                $queryParams['status'] = $status;
            }
        }
        // query params
        if ($orderBy !== null) {
            if('form' === 'form' && is_array($orderBy)) {
                foreach($orderBy as $key => $value) {
                    $queryParams[$key] = $value;
                }
            }
            else {
                $queryParams['order_by'] = $orderBy;
            }
        }
        // query params
        if ($asc !== null) {
            if('form' === 'form' && is_array($asc)) {
                foreach($asc as $key => $value) {
                    $queryParams[$key] = $value;
                }
            }
            else {
                $queryParams['asc'] = $asc;
            }
        }
        // query params
        if ($name !== null) {
            if('form' === 'form' && is_array($name)) {
                foreach($name as $key => $value) {
                    $queryParams[$key] = $value;
                }
            }
            else {
                $queryParams['name'] = $name;
            }
        }




        if ($multipart) {
            $headers = $this->headerSelector->selectHeadersForMultipart(
                ['application/json']
            );
        } else {
            $headers = $this->headerSelector->selectHeaders(
                ['application/json'],
                []
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
            'GET',
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