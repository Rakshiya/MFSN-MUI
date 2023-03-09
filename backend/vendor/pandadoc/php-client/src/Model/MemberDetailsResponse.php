<?php
/**
 * MemberDetailsResponse
 *
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

namespace PandaDoc\Client\Model;

use \ArrayAccess;
use \PandaDoc\Client\ObjectSerializer;

/**
 * MemberDetailsResponse Class Doc Comment
 *
 * @category Class
 * @package  PandaDoc\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<TKey, TValue>
 * @template TKey int|null
 * @template TValue mixed|null
 */
class MemberDetailsResponse implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $openAPIModelName = 'MemberDetailsResponse';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $openAPITypes = [
        'userId' => 'string',
        'membershipId' => 'string',
        'email' => 'string',
        'firstName' => 'string',
        'lastName' => 'string',
        'isActive' => 'bool',
        'workspace' => 'string',
        'workspaceName' => 'string',
        'emailsVerified' => 'bool',
        'role' => 'string',
        'userLicense' => 'string',
        'dateCreated' => 'string',
        'dateModified' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static $openAPIFormats = [
        'userId' => null,
        'membershipId' => null,
        'email' => null,
        'firstName' => null,
        'lastName' => null,
        'isActive' => null,
        'workspace' => null,
        'workspaceName' => null,
        'emailsVerified' => null,
        'role' => null,
        'userLicense' => null,
        'dateCreated' => null,
        'dateModified' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    #[\ReturnTypeWillChange]
    public static function openAPITypes()
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    #[\ReturnTypeWillChange]
    public static function openAPIFormats()
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'userId' => 'user_id',
        'membershipId' => 'membership_id',
        'email' => 'email',
        'firstName' => 'first_name',
        'lastName' => 'last_name',
        'isActive' => 'is_active',
        'workspace' => 'workspace',
        'workspaceName' => 'workspace_name',
        'emailsVerified' => 'emails_verified',
        'role' => 'role',
        'userLicense' => 'user_license',
        'dateCreated' => 'date_created',
        'dateModified' => 'date_modified'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'userId' => 'setUserId',
        'membershipId' => 'setMembershipId',
        'email' => 'setEmail',
        'firstName' => 'setFirstName',
        'lastName' => 'setLastName',
        'isActive' => 'setIsActive',
        'workspace' => 'setWorkspace',
        'workspaceName' => 'setWorkspaceName',
        'emailsVerified' => 'setEmailsVerified',
        'role' => 'setRole',
        'userLicense' => 'setUserLicense',
        'dateCreated' => 'setDateCreated',
        'dateModified' => 'setDateModified'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'userId' => 'getUserId',
        'membershipId' => 'getMembershipId',
        'email' => 'getEmail',
        'firstName' => 'getFirstName',
        'lastName' => 'getLastName',
        'isActive' => 'getIsActive',
        'workspace' => 'getWorkspace',
        'workspaceName' => 'getWorkspaceName',
        'emailsVerified' => 'getEmailsVerified',
        'role' => 'getRole',
        'userLicense' => 'getUserLicense',
        'dateCreated' => 'getDateCreated',
        'dateModified' => 'getDateModified'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    #[\ReturnTypeWillChange]
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    #[\ReturnTypeWillChange]
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    #[\ReturnTypeWillChange]
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    #[\ReturnTypeWillChange]
    public function getModelName()
    {
        return self::$openAPIModelName;
    }


    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['userId'] = $data['userId'] ?? null;
        $this->container['membershipId'] = $data['membershipId'] ?? null;
        $this->container['email'] = $data['email'] ?? null;
        $this->container['firstName'] = $data['firstName'] ?? null;
        $this->container['lastName'] = $data['lastName'] ?? null;
        $this->container['isActive'] = $data['isActive'] ?? null;
        $this->container['workspace'] = $data['workspace'] ?? null;
        $this->container['workspaceName'] = $data['workspaceName'] ?? null;
        $this->container['emailsVerified'] = $data['emailsVerified'] ?? null;
        $this->container['role'] = $data['role'] ?? null;
        $this->container['userLicense'] = $data['userLicense'] ?? null;
        $this->container['dateCreated'] = $data['dateCreated'] ?? null;
        $this->container['dateModified'] = $data['dateModified'] ?? null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    #[\ReturnTypeWillChange]
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    #[\ReturnTypeWillChange]
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets userId
     *
     * @return string|null
     */
    #[\ReturnTypeWillChange]
    public function getUserId()
    {
        return $this->container['userId'];
    }

    /**
     * Sets userId
     *
     * @param string|null $userId A unique identifier of the user in the organization.
     *
     * @return self
     */
    #[\ReturnTypeWillChange]
    public function setUserId($userId)
    {
        $this->container['userId'] = $userId;

        return $this;
    }

    /**
     * Gets membershipId
     *
     * @return string|null
     */
    #[\ReturnTypeWillChange]
    public function getMembershipId()
    {
        return $this->container['membershipId'];
    }

    /**
     * Sets membershipId
     *
     * @param string|null $membershipId A unique identifier of the user in the workspace.
     *
     * @return self
     */
    #[\ReturnTypeWillChange]
    public function setMembershipId($membershipId)
    {
        $this->container['membershipId'] = $membershipId;

        return $this;
    }

    /**
     * Gets email
     *
     * @return string|null
     */
    #[\ReturnTypeWillChange]
    public function getEmail()
    {
        return $this->container['email'];
    }

    /**
     * Sets email
     *
     * @param string|null $email A user's email address.
     *
     * @return self
     */
    #[\ReturnTypeWillChange]
    public function setEmail($email)
    {
        $this->container['email'] = $email;

        return $this;
    }

    /**
     * Gets firstName
     *
     * @return string|null
     */
    #[\ReturnTypeWillChange]
    public function getFirstName()
    {
        return $this->container['firstName'];
    }

    /**
     * Sets firstName
     *
     * @param string|null $firstName A user's first name.
     *
     * @return self
     */
    #[\ReturnTypeWillChange]
    public function setFirstName($firstName)
    {
        $this->container['firstName'] = $firstName;

        return $this;
    }

    /**
     * Gets lastName
     *
     * @return string|null
     */
    #[\ReturnTypeWillChange]
    public function getLastName()
    {
        return $this->container['lastName'];
    }

    /**
     * Sets lastName
     *
     * @param string|null $lastName A user's last name.
     *
     * @return self
     */
    #[\ReturnTypeWillChange]
    public function setLastName($lastName)
    {
        $this->container['lastName'] = $lastName;

        return $this;
    }

    /**
     * Gets isActive
     *
     * @return bool|null
     */
    #[\ReturnTypeWillChange]
    public function getIsActive()
    {
        return $this->container['isActive'];
    }

    /**
     * Sets isActive
     *
     * @param bool|null $isActive A boolean value that identifies if a member is active in the workspace.
     *
     * @return self
     */
    #[\ReturnTypeWillChange]
    public function setIsActive($isActive)
    {
        $this->container['isActive'] = $isActive;

        return $this;
    }

    /**
     * Gets workspace
     *
     * @return string|null
     */
    #[\ReturnTypeWillChange]
    public function getWorkspace()
    {
        return $this->container['workspace'];
    }

    /**
     * Sets workspace
     *
     * @param string|null $workspace A name of the user's current active workspace.
     *
     * @return self
     */
    #[\ReturnTypeWillChange]
    public function setWorkspace($workspace)
    {
        $this->container['workspace'] = $workspace;

        return $this;
    }

    /**
     * Gets workspaceName
     *
     * @return string|null
     */
    #[\ReturnTypeWillChange]
    public function getWorkspaceName()
    {
        return $this->container['workspaceName'];
    }

    /**
     * Sets workspaceName
     *
     * @param string|null $workspaceName A unique identifier of the user's current active workspace.
     *
     * @return self
     */
    #[\ReturnTypeWillChange]
    public function setWorkspaceName($workspaceName)
    {
        $this->container['workspaceName'] = $workspaceName;

        return $this;
    }

    /**
     * Gets emailsVerified
     *
     * @return bool|null
     */
    #[\ReturnTypeWillChange]
    public function getEmailsVerified()
    {
        return $this->container['emailsVerified'];
    }

    /**
     * Sets emailsVerified
     *
     * @param bool|null $emailsVerified A boolean value that identifies if the email is verified.
     *
     * @return self
     */
    #[\ReturnTypeWillChange]
    public function setEmailsVerified($emailsVerified)
    {
        $this->container['emailsVerified'] = $emailsVerified;

        return $this;
    }

    /**
     * Gets role
     *
     * @return string|null
     */
    #[\ReturnTypeWillChange]
    public function getRole()
    {
        return $this->container['role'];
    }

    /**
     * Sets role
     *
     * @param string|null $role A member's role in the workspace.
     *
     * @return self
     */
    #[\ReturnTypeWillChange]
    public function setRole($role)
    {
        $this->container['role'] = $role;

        return $this;
    }

    /**
     * Gets userLicense
     *
     * @return string|null
     */
    #[\ReturnTypeWillChange]
    public function getUserLicense()
    {
        return $this->container['userLicense'];
    }

    /**
     * Sets userLicense
     *
     * @param string|null $userLicense A user license in the organization.
     *
     * @return self
     */
    #[\ReturnTypeWillChange]
    public function setUserLicense($userLicense)
    {
        $this->container['userLicense'] = $userLicense;

        return $this;
    }

    /**
     * Gets dateCreated
     *
     * @return string|null
     */
    #[\ReturnTypeWillChange]
    public function getDateCreated()
    {
        return $this->container['dateCreated'];
    }

    /**
     * Sets dateCreated
     *
     * @param string|null $dateCreated A date when a member was added to the workspace.
     *
     * @return self
     */
    #[\ReturnTypeWillChange]
    public function setDateCreated($dateCreated)
    {
        $this->container['dateCreated'] = $dateCreated;

        return $this;
    }

    /**
     * Gets dateModified
     *
     * @return string|null
     */
    #[\ReturnTypeWillChange]
    public function getDateModified()
    {
        return $this->container['dateModified'];
    }

    /**
     * Sets dateModified
     *
     * @param string|null $dateModified Last modified date of a member.
     *
     * @return self
     */
    #[\ReturnTypeWillChange]
    public function setDateModified($dateModified)
    {
        $this->container['dateModified'] = $dateModified;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    #[\ReturnTypeWillChange]
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed|null
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset)
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     *
     * @return void
     */
    #[\ReturnTypeWillChange]
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    #[\ReturnTypeWillChange]
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @link https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value
     * of any type other than a resource.
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize()
    {
       return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    #[\ReturnTypeWillChange]
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    #[\ReturnTypeWillChange]
    public function toHeaderValue()
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


